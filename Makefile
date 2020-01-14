TARGET=main
all: $(TARGET)

main: .
	bundle exec jekyll build
	rsync -r _site/* ewu@compute01.cs.columbia.edu:~/html
	ssh ewu@compute01.cs.columbia.edu 'chmod 751 html; cd html; chmod -R 444 *.html files ducao; cd ~/; cp -r html/* secure_html/'
	git commit -m "updated site" .; git push


