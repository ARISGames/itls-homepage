.PHONY: deploy

deploy:
	rsync -vrc app/* tolly@fieldday-web.ad.education.wisc.edu:/var/www/arisgames.org/scratch/itls
