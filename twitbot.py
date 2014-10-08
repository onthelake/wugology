
from urllib import urlopen
import time, re, tweepy, sys

CONSUMER_KEY = "..." #replace ... with your key
CONSUMER_SECRET = "..." #replace ... with your secret
ACCESS_KEY = "..." #replace ... with your key
ACCESS_SECRET = "..." #replace ... with your secret
auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
auth.set_access_token(ACCESS_KEY, ACCESS_SECRET)
api = tweepy.API(auth)

def ethnologue(lngcode):
    url = "https://www.ethnologue.com/language/"+str(lngcode)
    html = urlopen(url).read()
    Language = re.search(r'(?<=\>)[^\<\>]+(?=\</h1\>)',html).group()
    Loc = re.search(r'(?<=[A-Z]"\>)[^\<\>]+(?=\</a\>\</h2\>)',html)
    Location = " of " + Loc.group() if Loc else ""
    End = re.search(r'(\>\d\d?\D? \()(\w+ ?\w+?)(?=\)\.)',html)
    Endangerment = " " + End.group(2) if End else ""
    return Language + " is a" + Endangerment.lower() + " language" + Location + ". More info: " + url

languageCodes = ["ase","uby","myp"] #this code will only tweet American Sign Language, Ubykh, and Piraha; complete version contains all 7106 languages on Ethnologue

while len(languageCodes) > 0:
    tweetLng = languageCodes.pop()
    api.update_status(ethnologue(tweetLng))
    time.sleep(4000)

