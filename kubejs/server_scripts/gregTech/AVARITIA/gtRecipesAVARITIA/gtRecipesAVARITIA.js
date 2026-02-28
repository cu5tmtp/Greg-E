ServerEvents.recipes((event) =>{

    event.shaped(
        Item.of('kubejs:pelletmold', 1),
        [
            'A  ',
            ' B ',
            '   '
        ],
        {
            A: 'gtceu:empty_mold',
            B: '#gtceu:tools/crafting_hammers',
        }
    )

    event.recipes.gtceu.forming_press('getthebrasspellet')
        .itemInputs(
            '8x gtceu:brass_ingot'
        )
        .itemOutputs(
            'gregecore:brass_pellet'
        )
        .notConsumable('kubejs:pelletmold')
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)

    event.recipes.gtceu.forming_press('gettheamericiumpellet')
        .itemInputs(
            '8x gtceu:americium_ingot'
        )
        .itemOutputs(
            'gregecore:americium_pellet'
        )
        .notConsumable('kubejs:pelletmold')
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)

    event.recipes.gtceu.forming_press('gettheneutroniumpellet')
        .itemInputs(
            '8x gtceu:neutronium_ingot'
        )
        .itemOutputs(
            'gregecore:neutronium_pellet'
        )
        .notConsumable('kubejs:pelletmold')
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(100)


})