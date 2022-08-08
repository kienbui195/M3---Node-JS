async function onMyBirthday(isKayoSick) {
    if (!isKayoSick) return 2
    else throw new Error('I am sad')
}

async function doSomeThing() {
    try {
        let result = await onMyBirthday(false)
        console.log(`I have ${result} cake`)
    }
    catch (e) {
        console.log(e)
    }
    finally {
        console.log(`Party`)
    }
}

doSomeThing()