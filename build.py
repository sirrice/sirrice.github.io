import jinja2
import jinja2.ext
import markdown2
import os
import sys
sys.path.append(".")

from staticjinja import make_site




class Markdown2Extension(jinja2.ext.Extension):
    tags = set(['markdown2'])

    def __init__(self, environment):
        super(Markdown2Extension, self).__init__(environment)
        environment.extend(
            markdowner=markdown2.Markdown()
        )   

    def parse(self, parser):
        lineno = parser.stream.next().lineno
        body = parser.parse_statements(
            ['name:endmarkdown2'],
            drop_needle=True
        )
        ret = jinja2.nodes.CallBlock(
            self.call_method('_markdown_support'),
            [],
            [],
            body
        ).set_lineno(lineno)
        return ret

    def _markdown_support(self, caller):
        ret = self.environment.markdowner.convert(caller()).strip()
        return ret

env = jinja2.Environment(extensions=[Markdown2Extension])


def get_post_contents(template):
    with open(template.filename) as f:
        return {'post': f.read()}


# compilation rule
def render_post(env, template, **kwargs):
    """Render a template as a post."""
    post_template = env.get_template("_post.html")
    head, tail = os.path.split(template.name)
    post_title, _ = tail.split('.')
    if head:
        out = "%s/%s.html" % (head, post_title)
        if not os.path.exists(head):
            os.makedirs(head)
    else:
        out = "%s.html" % (post_title, )
    post_template.stream(**kwargs).dump(out)


if __name__ == "__main__":
    site = make_site(extensions=[
        Markdown2Extension,
    ], contexts=[
        ('.*.md', get_post_contents),
    ], rules=[
        ('.*.md', render_post),
    ])
    site.render(use_reloader=False)