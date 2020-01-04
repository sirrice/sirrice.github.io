TARGET=main
all: $(TARGET)

main: .
	bundle exec jekyll build
	rsync -r _site/* ewu@compute01.cs.columbia.edu:~/html
	ssh ewu@compute01.cs.columbia.edu 'cd html; chmod -R 775 *.html files ducao'
	git commit -m "updated site" .; git push


