ssh-agent bash -c 'ssh-add ~/.ssh/gitlab; git fetch --all; git pull origin deployment'
docker compose kill
docker compose up -d --build
sleep 1m
while [ true ]
do
	ssh-agent bash -c 'ssh-add ~/.ssh/gitlab; git fetch --all'
	OLD_HASH=$(git log -1 --pretty=format:"%H")
	NEW_HASH=$(git log origin/deployment -1 --pretty=format:"%H")
	echo $OLD_HASH "<=>" $NEW_HASH
	if [ $OLD_HASH != $NEW_HASH ]
		then ssh-agent bash -c 'ssh-add ~/.ssh/gitlab; git pull origin deployment'
		docker compose kill
		docker compose up -d --build
	fi
	sleep 1m
done
