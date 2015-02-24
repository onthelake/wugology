rm(list=ls(all=TRUE)) # clear data
source("http://www.linguistics.ucsb.edu/faculty/stgries/exact_matches.r")
setwd('/Users/Onna/Desktop/')
LL2013 <- scan("LLjobs2013.txt", what=character())
LL2013.2 <- gsub("Jobs", "", LL2013)
LL2013.3 <- gsub(";", "", LL2013.2)
LL2013.4 <- gsub(":", "", LL2013.3)
jobs<-sort(table(LL2013.4), decreasing=TRUE)
write.table(jobs, file = "linglist2013jobs.csv")

######
rm(list=ls(all=TRUE)) # clear data
setwd('/Users/Onna/Desktop/')
LL <- scan("LLjobs2012.txt", what=character())
LL.2 <- gsub("Jobs", "", LL)
LL.3 <- gsub(":", "", LL.2)
LL.4 <- gsub(";","",LL.3)
jobs<-sort(table(LL.4), decreasing=TRUE)
write.table(jobs, file = "linglist2012jobs.csv")

rm(list=ls(all=TRUE)) # clear data
setwd('/Users/Onna/Desktop/')
LL <- scan("LLjobs2011.txt", what=character())
LL.2 <- gsub("Jobs", "", LL)
LL.3 <- gsub(":", "", LL.2)
LL.4 <- gsub(";","",LL.3)
LL.5 <- gsub("\\/", " ", LL.4)
jobs<-sort(table(LL.4), decreasing=TRUE)
write.table(jobs, file = "linglist2011jobs.csv")

rm(list=ls(all=TRUE)) # clear data
setwd('/Users/Onna/Desktop/')
LL <- scan("LLjobs2010.txt", what=character())
LL.2 <- gsub("Jobs", "", LL)
LL.3 <- gsub(":", "", LL.2)
LL.4 <- gsub(";","",LL.3)
jobs<-sort(table(LL.4), decreasing=TRUE)
write.table(jobs, file = "linglist2010jobs.csv")

##############
LL13 <- c("Applied","Comp/NLP","General","English","Acquisition","Cog/Psych","Phonetics","Phonology","Syntax","Socioling")
LL13N <- c(202,191,172,147,115,115,84,79,60,56)
LL12 <- c("Comp/NLP","Applied","English","General","Cog/Psych","Phonetics","Acquisition","Syntax","Phonology","Spanish")
LL12N <- c(188,146,139,124,79,61,44,43,42,42)
LL11 <-c("Comp/NLP","English","General","Applied","Cog/Psych","Acquisition","Spanish","Syntax","Phonetics","Phonology")
LL11N <-c(128,92,82,77,63,53,41,32,31,29)
LL10 <-c("Comp/NLP","Applied","English","General","Acquisition","Syntax","Cog/Psych","Socioling","Spanish","Phonology")
LL10N <- c(86,85,62,59,45,34,34,25,24,23)

par(mfrow=c(2,2))
barplot(LL10N, names=LL10, las=2, col=c("red2","blue2","green2","yellow","skyblue","darkgoldenrod1","darkmagenta","plum","darkred","darkolivegreen3"), ylim=c(0,200),main="Linguist List Jobs 2010")
barplot(LL11N, names=LL11, las=2, col=c("red2","green2","yellow","blue2","darkmagenta","skyblue","darkred","darkgoldenrod1","palegreen","darkolivegreen3"), ylim=c(0,200),main="Linguist List Jobs 2011")
barplot(LL12N, names=LL12, las=2, col=c("red2","blue2","green2","yellow","darkmagenta","palegreen","skyblue","darkgoldenrod1","darkolivegreen3","darkred"), ylim=c(0,200),main="Linguist List Jobs 2012")
barplot(LL13N, names=LL13, las=2, col=c("blue","red2","yellow","green2","skyblue","darkmagenta","palegreen","darkolivegreen3","darkgoldenrod1","plum"), ylim=c(0,200),main="Linguist List Jobs 2013")