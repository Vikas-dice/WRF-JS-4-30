let nsp = 5;
for (let i = 0; i <= 5; i++) {
    for (let sp = 0; sp < nsp; sp++) {
        process.stdout.write(' ')
    }
    console.log('*')
    console.log();
    nsp = nsp - 1
}