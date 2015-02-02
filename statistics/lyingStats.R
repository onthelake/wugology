tuition <- c(4099, 7556, 13866)
years <- c("1994-1995","2004-2005","2014-2015")
barplot(tuition,names=years,main="UC Tuition & Fees",ylim=c(0,14000),col=c(topo.colors(3)))

adjusted <- c(6552,9555,13866)
barplot(adjusted,names=years,main="UC Tuition & Fees \n (adjusted in 2014 dollars)",ylim=c(0,14000),col=c(topo.colors(3)))

murders <- read.csv("murder.csv",header=T)
attach(murders)
barplot(murders$Murders, names=murders$City,las=3,main="Number of Murders in Major US Cities",col=c(heat.colors(10)))
murders2 <- murders[order(-Per.Capita),] 
barplot(murders2$Per.Capita, names=murders2$City,las=3,main="Number of Murders in Major US Cities per 100,000 citizens",col=c(heat.colors(10)),ylim=c(0,50))
