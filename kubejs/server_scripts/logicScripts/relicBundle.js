ItemEvents.rightClicked('kubejs:dwre', event => {

    const player = event.player;
    const item = event.item;
        
    const lootTable = [
        { id: 'kubejs:cpottery', weight: 10 },
        { id: 'minecraft:clay', weight: 30 },
        { id: 'minecraft:stick', weight: 60 }
    ];

    let totalWeight = 0;
    lootTable.forEach(entry => {
        totalWeight += entry.weight;
    });

    let randomNumber = Math.floor(Math.random() * totalWeight);
    let selectedItem = null;

    for (const entry of lootTable) {
        if (randomNumber < entry.weight) {
            selectedItem = entry.id;
            break;
        }
        randomNumber -= entry.weight;
    }

    if (selectedItem) {
        player.give(selectedItem);
        item.count--; 
    }
});