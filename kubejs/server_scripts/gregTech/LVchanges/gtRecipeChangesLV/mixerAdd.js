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
        .duration(100)
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
        { id: 'petwhite', output: 'botania:white_petal', circuit: 17 },
        { id: 'petorange', output: 'botania:orange_petal', circuit: 18 },
        { id: 'petmagenta', output: 'botania:magenta_petal', circuit: 19 },
        { id: 'petlight_blue', output: 'botania:light_blue_petal', circuit: 20 },
        { id: 'petyellow', output: 'botania:yellow_petal', circuit: 21 },
        { id: 'plime', output: 'botania:lime_petal', circuit: 22 },
        { id: 'petpink', output: 'botania:pink_petal', circuit: 23 },
        { id: 'petgray', output: 'botania:gray_petal', circuit: 24 },
        { id: 'petlight_gray', output: 'botania:light_gray_petal', circuit: 25 },
        { id: 'ptcyan', output: 'botania:cyan_petal', circuit: 26 },
        { id: 'pepurple', output: 'botania:purple_petal', circuit: 27 },
        { id: 'pblue', output: 'botania:blue_petal', circuit: 28 },
        { id: 'petbrown', output: 'botania:brown_petal', circuit: 29 },
        { id: 'petgreen', output: 'botania:green_petal', circuit: 30 },
        { id: 'pred', output: 'botania:red_petal', circuit: 31 },
        { id: 'petblack', output: 'botania:black_petal', circuit: 32 }
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