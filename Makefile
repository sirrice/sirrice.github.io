TARGET=main
all: $(TARGET)

main: .
	bundle exec jekyll build
	rsync -r _site/* ewu@compute01.cs.columbia.edu:~/html
	ssh ewu@compute01.cs.columbia.edu 'cp -r html/* secure_html/; chmod -R 775 html secure_html'
	git commit -m "updated site" .; git push


