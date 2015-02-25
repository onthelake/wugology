rm(list=ls(all=TRUE)) # clear data
setwd("~/Documents/CorpusFiles/") #set working directory
files <- list.files(); head(files) #load & check working directory
corpus <- vector() #make an empty vector

for (i in 1:length(files)) {
   temp <- scan(files[i], what=character(0), sep="\n")
   corpus <- append(corpus, temp)
}

head(corpus);tail(corpus) #check the corpus
corpus2 <- gsub("\\d","",corpus) #get rid of numbers
corpus3 <- gsub(" +", " ", corpus2) #get rid of 2+ spaces
corpus4 <-strsplit(corpus3, "\\W") #split on non-word characters
corpus5 <-unlist(corpus4) #unlist the vector
corpus6 <- gsub("\\W","",corpus5) #get rid of non-word characters
head(corpus6);tail(corpus6)  #check the word list
freq.list<-table(tolower(corpus6)) #make everything lowercase
sorted.freq<-sort(freq.list, decreasing=T) #sort it
write.table(sorted.freq, "corpusfreq.csv") #make a CSV with your words and their freqs