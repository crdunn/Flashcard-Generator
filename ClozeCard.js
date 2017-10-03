var ClozeCard = function (text, cloze){
	this.fullText = text,
	this.cloze = cloze,
	this.partial = text.replace (cloze, "...")
};


module.exports = ClozeCard;