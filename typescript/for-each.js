function myForEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i);
    }
}
myForEach([1, 2, 3], function (elem, index) {
    console.log('Element ', elem.toFixed(), ' Index ', index === null || index === void 0 ? void 0 : index.toFixed());
    //elem.somethingElse();
});
