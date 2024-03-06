back() {
    var runner = this.head;
    while(runner.next) {
        runner = runner.next
    }
    return runner.value
}
removeBack() {
    var runner = this.head;
    while(runner.next.next) {
        runner = runner.next
    }
    runner.next = null;
    return this
}
addBack(value) {
    var runner = this.head;
    while(runner.next) {
        runner = runner.next
    }
    runner.next = new Node(value);
    return this
}