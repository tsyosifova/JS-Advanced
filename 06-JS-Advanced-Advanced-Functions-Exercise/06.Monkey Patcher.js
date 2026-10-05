function solution(command) {

    if (command === 'upvote') {
        this.upvotes += 1;
        return;

    } else if (command === 'downvote') {
        this.downvotes += 1;
        return;
    }

    let totalVotes = this.upvotes + this.downvotes;
    let balance = this.upvotes - this.downvotes;
    let rating = 'new';

    if (totalVotes >= 10) {
        if (this.upvotes / totalVotes > 0.66) {
            rating = 'hot';
        } else if (totalVotes > 100 && balance >= 0) {
            rating = 'controversial';
        } else if (balance < 0) {
            rating = 'unpopular';
        }
    }

    let addVote = totalVotes > 50
        ? Math.ceil(0.25 * Math.max(this.upvotes, this.downvotes))
        : 0;

    let newUpvote = this.upvotes + addVote;
    let newDownvotes = this.downvotes + addVote;
    
    return [newUpvote, newDownvotes, balance, rating];
}


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// solution.call(post, 'downvote');         // (executed 50 times)
// score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']

console.log(solution.call(post, 'score'));
// [127, 127, 0, 'controversial']

for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');
}

console.log(solution.call(post, 'score'));
// [139, 189, -50, 'unpopular']