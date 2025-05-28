#!/bin/bash

flutter build web --release


if [ $? -ne 0 ]; then
  echo "Flutter build failed. Exiting."
  exit 1
fi


mkdir -p server/public/
cp -r build/web/* server/public/
if [ $? -ne 0 ]; then
  echo "Failed to copy files to server/static/. Exiting."
  exit 1
fi

echo "Files copied successfully to server/public/."
echo "Push the changes to the repository and deploy the server."



