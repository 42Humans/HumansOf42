import re
import json

interviews = []

for i in range(1, 44 + 1):
    with open(f"{i}.md") as f:
        lines = f.readlines()
        lines = map(lambda x: x.strip(), lines)
        lines = list(lines)
        title = lines[0]
        subtitle = lines[1]
        date = lines[2]
        photographer = re.match(r"(photographer )?(.*)", lines[-2]).group(2).split(", ")
        interviewer = re.match(r"(interviewer )?(.*)", lines[-3]).group(2).split(", ")

        try:
            interviewee = re.match(r"[a-zA-Z0-9, \-]+", subtitle).group(0).split(", ")
        except AttributeError:
            interviewee = []

    interviews.append(
        {
            "id": i,
            "title": title,
            "subtitle": subtitle,
            "date": date,
            "interviewer": interviewer,
            "interviewee": interviewee,
            "photographer": photographer,
        }
    )

with open("out.json", "w") as f:
    json.dump(interviews, f, ensure_ascii=False)
