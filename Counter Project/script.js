var count = 0

function increase()
{
    count += 1
    document.getElementById('count').innerText = count;
    return count
}
function decrease()
{
    count -= 1
    document.getElementById('count').innerText = count;

    return count
}
function reset()
{
    count = 0
    document.getElementById('count').innerText = count;

    return count
}