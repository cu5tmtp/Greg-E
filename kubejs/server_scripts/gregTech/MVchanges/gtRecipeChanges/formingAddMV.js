ServerEvents.recipes((event) => {

    event.recipes.gtceu.forming_press('twilightalloypress')
        .itemInputs(
            'kubejs:hydraingot',
            'kubejs:mushroomingot',
            'kubejs:lichingot',
            'kubejs:knightingot'
        )
        .itemOutputs(
            'kubejs:twilightingots'
        )
        .duration(200)
        .EUt(120)

})