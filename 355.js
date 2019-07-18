/**
 * Initialize your data structure here.
 */
var Twitter = function () {
    this.userlist = {}
    this.userFollow = {}
    this.recNumber = 0
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    if (!this.userlist[userId]) {
        this.userlist[userId] = []
    }
    this.userlist[userId].push([tweetId, this.recNumber])
    this.recNumber += 1
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    let answer = {}
    let answer_transfrom = []
    if (this.userFollow[userId]) {
        for (let key in this.userFollow[userId]) {
            if (this.userFollow[userId][key] && this.userlist[key]) {
                this.userlist[key].forEach(e => { answer[e[1]] = e[0] })
            }
        }
    }

    if (this.userlist[userId]) {
        this.userlist[userId].forEach(e => {
            answer[e[1]] = e[0]
        })
    }

    for (let key in answer) {
        answer_transfrom.push(answer[key])
    }

    if (answer_transfrom.length > 10) {
        return answer_transfrom.slice(answer_transfrom.length - 10, answer_transfrom.length).reverse()
    } else {
        return answer_transfrom.reverse()
    }
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (!this.userFollow[followerId]) {
        this.userFollow[followerId] = {}
    }
    this.userFollow[followerId][followeeId] = 1
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (this.userFollow[followerId] && this.userFollow[followerId][followeeId]) {
        this.userFollow[followerId][followeeId] = 0
    }
};