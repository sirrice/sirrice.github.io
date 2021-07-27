import click
import yaml
import sys


mine = """Daniel Alabi
Fotis Psallidas
Zachary Huang
Lana Ramjit
Lampros Flokas
Gabriel Ryan
Hamed Nilforoshan
Haneen Mohammed
Qianrui Zhang
Viraj Rai
Jacob Fisher
Haoci Zhang
Ian Yiran Huang
Lauren Arnett
Robert Netzorg
James Sands
Kevin Lin
Rahul Khanna
Thibault Sellam
Yiliang Shi
Yiru Chen
Zhengjie Miao"""
mine = set([auth.strip().lower() for auth in mine.split("\n")])



def format_auth(auth):
  parts = auth.split()
  name = []
  for part in parts[:-1]:
    name.append(part[0] + ".")
  name.append(parts[-1])
  name = " ".join(name)
  if auth.lower() in mine:
    return "\\underline{\\bf %s}" % name
  if auth.lower() == "eugene wu":
    return "\\underline{%s}" % name
  else:
    return name

def format_text_auth(auth):
  parts = auth.split()
  name = []
  for part in parts[:-1]:
    name.append(part[0] + ".")
  name.append(parts[-1])
  name = " ".join(name)
  return name


def format_auths(auths):
  return ", ".join(map(format_auth, auths))

def format_bibtex_auth(auth):
  parts = auth.split()
  name = ", ".join([parts[-1], parts[0]])
  return name

def format_bibtex_auths(auths):
  return " and ".join(map(format_bibtex_auth, auths))


def format_text_auths(auths):
  return ", ".join(map(format_text_auth, auths))


def print_pub(pub):
  try:
    auths = pub.get("authors", "")
    auths = [auth.strip() for auth in auths.split(",")]
    auths = format_auths(auths)
    title = pub.get("title", "")
    title = title.strip(".")
    conf = pub.get("conf", "")
    conf = conf.strip(".")
    rate = pub.get("rate", "")
    citations = pub.get("citations", "")
    misc = []
    if rate:
      misc.append("acceptance rate: %s\\%%" % rate)
    if citations:
      misc.append("citations: %d" % citations)
    misc = ", ".join(misc)
    if misc:
      misc = "(%s)" % misc
    return "%s. ``{\\it %s.}'' %s. %s" % (auths, title, conf, misc)
  except Exception as e:
    print(e)
    print(pub)
    raise e


def print_text_pub(pub):
  try:
    auths = pub.get("authors", "")
    auths = [auth.strip() for auth in auths.split(",")]
    auths = format_text_auths(auths)
    title = pub.get("title", "")
    title = title.strip(".")
    conf = pub.get("conf", "")
    conf = conf.strip(".")
    return "%s. ''%s.'' %s." % (auths, title, conf)
  except Exception as e:
    print(e)
    print(pub)
    raise e


def print_bibtex(pub, id):
  try:
    auths = pub.get("authors", "")
    auths = [auth.strip() for auth in auths.split(",")]
    auths = format_bibtex_auths(auths)
    title = pub.get("title", "")
    title = title.strip(".")
    conf = get_conf_name(pub)
    conf = conf.strip(".")
    year = get_year(pub)
    return """
@inproceedings{pub%s,
  title={%s},
  author={%s},
  booktitle={%s},
  year={%s}
}
    """ % (id, title, auths, conf, year)
  except Exception as e:
    print(e)
    print(pub)
    raise e



def print_medline(pub, id):
  try:
    auths = pub.get("authors", "")
    auths = [auth.strip() for auth in auths.split(",")]
    auths = "\n".join(["AU  - %s,\r" % a.replace(" ", "") for a in map(format_bibtex_auth, auths)])
    title = pub.get("title", "")
    title = title.strip(".")
    conf = get_conf_name(pub)
    conf = conf.strip(".")
    year = get_year(pub)
    return """TI  - %s\r
DP  - %s\r
%s\r
PG  - \r
TA  - %s\r
\r""" % (title, year, auths, conf)
  except Exception as e:
    print(e)
    print(pub)
    raise e

def print_latex(pub, i, b_year):
  year = b_year and get_year(pub) or ""
  pub = print_pub(pub)
  return "\\smallskip %s& $[%d]$ \\smallskip %s\\\\" % (year, i, pub)




def get_conf_name(pub):
  ret = []
  for v in pub['conf'].strip().split():
    try:
      int(v)
    except:
      ret.append(v)
  return " ".join(ret)


def get_year(pub):
  for v in pub['conf'].strip().split():
    try:
      return int(v)
    except:
      pass
  return None

@click.command()
@click.argument("pubfname")
@click.option("-b", is_flag=True, help="Print bibtex, then exit")
@click.option("-a", is_flag=True, help="Include anticipated papers")
@click.option("-m", is_flag=True, help="Print MEDLINE format, then exit")
def main(pubfname, b, a, m):
  """
  Input is the YML pubs file from the website
  """
  bibtex = b
  medline = m


  with open(pubfname, "r") as f:
    try:
      data = yaml.load(f)
    except Exception as e:
      print(e)
      return

  data = filter(get_year, data)
  data.sort(key=get_year, reverse=True)

  # TODO: print future, full, then short papers.
  i = 0

  if bibtex:
    for pub in data:
      try:
        print print_bibtex(pub, i)
        i += 1
      except:
        print >>sys.stderr, pub
    return

  if medline:
    for pub in data:
      try:
        print print_medline(pub, i)
        i += 1
      except:
        print >>sys.stderr, pub
    return



  prev_year = None
  i = 0
  if a:
    print "\n\n"
    print "&\\section{In Progress or In Review}\\\\"
    for pub in filter(lambda pub: pub.get("future"), data):
      year = get_year(pub)
      print print_latex(pub, i+1, prev_year != year)
      prev_year = year
      i += 1


  print "\n\n"
  print "&\\section{Full Publications}\\\\"
  for pub in filter(lambda pub: not pub.get("future") and not pub.get("short"), data):
    year = get_year(pub)
    print print_latex(pub, i+1, prev_year != year)
    prev_year = year
    i += 1


  print "\n\n"
  print "&\\section{Short Papers, Technical Reports, and Demos}\\\\"
  for pub in filter(lambda pub: pub.get("short"), data):
    year = get_year(pub)
    print print_latex(pub, i+1, prev_year != year)
    prev_year = year
    i += 1

  # print "\n\n"
  # for i, pub in enumerate(filter(lambda pub: not pub.get("future"), data)):
  #   pub = print_text_pub(pub)
  #   print "[%d] %s" % (i+1, pub)





if __name__ == "__main__":
  main()
