#!/bin/sh
set -eux

FILENAMES=$(find . -name "*.jp*g" | tr '\n' ' ')
for f in $FILENAMES
do
	new_f="${f%.*}.webp"
	magick "$f" -quality 50 "$new_f"
done
