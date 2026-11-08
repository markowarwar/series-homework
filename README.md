# series-homework

My homework for SeriesHub, a TV series site. I wrote JavaScript functions that read JSON data, use array methods, update data without changing the original, and I fixed three bugs from a coworker.

how to run
Run `node check.js` in the project folder.

question1

`{ ...show }` only makes a copy of the first level. The `seasons` array inside it is still the same array as in the original, so if I add an episode there, the original changes too. So I made a new show object, a new `seasons` array using `map`, a new object for the season I'm changing, and a new `episodes` array with the new episode in it. The other shows and seasons I didn't touch, so they stay the same objects.

question2
The coworker did copy `show` with `...`, but that copy is shallow. It copies the `seasons` array by reference, so both the copy and the original point to the same seasons and episodes. And he did `push` into the episodes array before the copy, so the new episode went straight into the original data. To fix it, I had to copy every level down to the season I change and use a new array instead of `push`.
