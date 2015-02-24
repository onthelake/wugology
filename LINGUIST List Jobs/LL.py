import nltk
import re
from urllib import urlopen
url = "http://linguistlist.org/issues/issues-by-topic.cfm?topic=7&y=2010"
raw = urlopen(url).read()
type(raw)
len(raw)
raw[:75]
tokens = nltk.word_tokenize(raw)
type(tokens)
len(tokens)
tokens[:10]
text = nltk.Text(tokens)
type(text)

output_file = open('Users/Onna/output.txt')
for result in re.search(r'<Jobs> <:> <.*>+ <:>',text):
    output_file.write(result + "\n")

#LLjobs.extend(re.search(r"<Jobs> <:> <.*>+ <:>",text))
#LLjobs = re.search(r "<Jobs> <:> <.*>+ <:>", text)

LLjobs = text.findall(r"<Jobs> <:> <.*>+ <:>") #this almost works

#jobs.append(text.match(r"<Jobs> <:> <.*>+ <:>"))

regex = re.compile(r"<Jobs> <:> <.*>+ <:>")
match = regex.match(text)



jobs = []
for match in text.findall(r"<Jobs> <:> <.*>+ <:>"):
    jobs.append(match)

LLjobs = [text.text for jobs in text.findall(r"<Jobs> <:> <.*>+ <:>")]