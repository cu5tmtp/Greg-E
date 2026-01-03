ServerEvents.recipes((event) => {

    //Remove unvanted recipes from thermal
    event.remove({ mod: 'thermal' })
    event.remove({ id: 'gtceu:shaped/gear_copper' })
    
});