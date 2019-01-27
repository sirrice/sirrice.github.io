import click
import yaml


mine = """Daniel Alabi
Fotis Psallidas
Gabriel Ryan
Hamed Nilforoshan
Haoci Zhang
Ian Yiran Huang
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
  lastname = parts[-1]
  rest = " ".join(parts[:-1])
  name = "%s. %s" % (lastname[0], rest)
  if auth.lower() in mine:
    return "\\underline{\\bf %s}" % name
  else:
    return name


def format_auths(auths):
  return ", ".join(map(format_auth, auths))

def print_pub(pub):
  try:
    auths = pub.get("authors", "")
    auths = [auth.strip() for auth in auths.split(",")]
    auths = format_auths(auths)
    title = pub.get("title", "")
    title = title.strip(".")
    conf = pub.get("conf", "")
    conf = conf.strip(".")
    return "%s. ``{\\it %s.}'' %s." % (auths, title, conf)
  except Exception as e:
    print e
    print pub
    raise e

def get_year(pub):
  for v in pub['conf'].strip().split():
    try:
      return int(v)
    except:
      pass
  return None

@click.command()
@click.argument("pubfname")
def main(pubfname):
  """
  Give the YML pubs file from the website
  """
  with open(pubfname, "r") as f:
    try:
      data = yaml.load(f)
    except Exception as e:
      print e
      return

  data = filter(get_year, data)
  data.sort(key=get_year, reverse=True)
  for i, pub in enumerate(data):
    pub = print_pub(pub)
    print "\\smallskip $[%d]$ & \\smallskip %s\\\\" % (i+1, pub)



if __name__ == "__main__":
  main()
