#!/bin/bash
set -eux

# %s/""/"/g
# %s/^[a-z]/{ speaker: &/g
# %s/speaker: /&"/g
# %s/^"/{ text: "/g
# %s/[^,]$/&"}, 
# %s/"$/" },/g

# Get the file name from the first argument
FILE=${1:-}

# Check if the file name is provided and if the file exists
if [ -z "$FILE" ] || [ ! -f "$FILE" ]; then
    echo "Error: File not provided or does not exist."
    exit 1
fi

# for question
sed -i '' -e 's/^Q.*\. /{"question": "/g; /^[^{].*?$/ s/^/{"question": "/;  s/^{"question": .*/&"}, /g' "$FILE"
# for speaker
sed -i '' -e 's/^[a-z]* /{"speaker": "&"},\n/g' "$FILE"
# for normal text
sed -i '' -e '/^[^{]/ s/^/{"text": "/; /^{"text":/ s/$/" },/' "$FILE"

# Add '[' at the beginning and ']' at the end
echo "[" | cat - "$FILE" > temp && mv temp "$FILE"
echo "]" >> "$FILE"
