TARGET=main
all: $(TARGET)

main: .
	#rvm use 3.1.2 --default
	bundle exec jekyll build
	rsync -r _site/* ewu@compute.cs.columbia.edu:~/html
	ssh ewu@compute.cs.columbia.edu 'cp -r html/* secure_html/; chmod -R 775 html secure_html'
	git commit -m "updated site" .; git push


