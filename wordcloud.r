library(wordcloud)
#library(RColorBrewer)
#library(extrafont)
#font_import()
#loadfonts()

setwd("~/Desktop")
data <- read.csv("lngs.csv",header=T,sep="\t");data
attach(data)
png("wordcloud.png", width=1200,height=800)
wordcloud(data$LANG,log2(data$SPK), scale=c(5,.25),min.freq=2,max.words=Inf, random.order=T, rot.per=.25, colors=c("blue2","green4","purple2","blue4","green2","purple","darkmagenta","cadetblue","darkolivegreen","blue","darkcyan"), random.color=T, vfont=c("sans serif","bold"))
dev.off()
?wordcloud