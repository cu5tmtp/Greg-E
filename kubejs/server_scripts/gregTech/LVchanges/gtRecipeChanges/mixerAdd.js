ServerEvents.recipes((event) => {

    event.recipes.gtceu.mixer('commonearth_obtain')
        .itemInputs(
            '2x gtceu:iron_dust',
            '2x gtceu:copper_dust',
            'minecraft:redstone'
        )
        .itemOutputs(
            '2x kubejs:commonearth'
        )
        .duration(300)
        .EUt(15)
        .circuit(1)

    //Add color recipes for crowbar and mystical fertilizer    
    const colors = [
        { id: 'cwhite', output: 'minecraft:white_dye', circuit: 1 },
        { id: 'corange', output: 'minecraft:orange_dye', circuit: 2 },
        { id: 'cmagenta', output: 'minecraft:magenta_dye', circuit: 3 },
        { id: 'clight_blue', output: 'minecraft:light_blue_dye', circuit: 4 },
        { id: 'cyellow', output: 'minecraft:yellow_dye', circuit: 5 },
        { id: 'clime', output: 'minecraft:lime_dye', circuit: 6 },
        { id: 'cpink', output: 'minecraft:pink_dye', circuit: 7 },
        { id: 'cgray', output: 'minecraft:gray_dye', circuit: 8 },
        { id: 'clight_gray', output: 'minecraft:light_gray_dye', circuit: 9 },
        { id: 'ccyan', output: 'minecraft:cyan_dye', circuit: 10 },
        { id: 'cpurple', output: 'minecraft:purple_dye', circuit: 11 },
        { id: 'cblue', output: 'minecraft:blue_dye', circuit: 12 },
        { id: 'cbrown', output: 'minecraft:brown_dye', circuit: 13 },
        { id: 'cgreen', output: 'minecraft:green_dye', circuit: 14 },
        { id: 'cred', output: 'minecraft:red_dye', circuit: 15 },
        { id: 'cblack', output: 'minecraft:black_dye', circuit: 16 },
    ]

    colors.forEach(color => {
        event.recipes.gtceu.mixer(color.id)
            .itemInputs('kubejs:rawcolor')
            .itemOutputs(color.output)
            .duration(100)
            .EUt(15)
            .circuit(color.circuit)
    })


    const mycolors = [
        { id: 'petwhite', output: 'botania:white_petal', circuit: 1 },
        { id: 'petorange', output: 'botania:orange_petal', circuit: 2 },
        { id: 'petmagenta', output: 'botania:magenta_petal', circuit: 3 },
        { id: 'petlight_blue', output: 'botania:light_blue_petal', circuit: 4 },
        { id: 'petyellow', output: 'botania:yellow_petal', circuit: 5 },
        { id: 'plime', output: 'botania:lime_petal', circuit: 6 },
        { id: 'petpink', output: 'botania:pink_petal', circuit: 7 },
        { id: 'petgray', output: 'botania:gray_petal', circuit: 8 },
        { id: 'petlight_gray', output: 'botania:light_gray_petal', circuit: 9 },
        { id: 'ptcyan', output: 'botania:cyan_petal', circuit: 18 },
        { id: 'pepurple', output: 'botania:purple_petal', circuit: 17 },
        { id: 'pblue', output: 'botania:blue_petal', circuit: 12 },
        { id: 'petbrown', output: 'botania:brown_petal', circuit: 13 },
        { id: 'petgreen', output: 'botania:green_petal', circuit: 14 },
        { id: 'pred', output: 'botania:red_petal', circuit: 15 },
        { id: 'petblack', output: 'botania:black_petal', circuit: 16 }
    ]

    mycolors.forEach(color => {
        event.recipes.gtceu.mixer(color.id)
            .itemInputs('kubejs:rawcolor')
            .inputFluids('kubejs:myessence 100')
            .itemOutputs(color.output)
            .duration(100)
            .EUt(15)
            .circuit(color.circuit)
    })


});