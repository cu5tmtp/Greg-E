ServerEvents.recipes((event) => {

    const mycolors = [
        { input: 'botania:white_petal', output: '4x botania:white_mystical_flower' },
        { input: 'botania:orange_petal', output: '4x botania:orange_mystical_flower' },
        { input: 'botania:magenta_petal', output: '4x botania:magenta_mystical_flower' },
        { input: 'botania:light_blue_petal', output: '4x botania:light_blue_mystical_flower' },
        { input: 'botania:yellow_petal', output: '4x botania:yellow_mystical_flower' },
        { input: 'botania:lime_petal', output: '4x botania:lime_mystical_flower' },
        { input: 'botania:pink_petal', output: '4x botania:pink_mystical_flower' },
        { input: 'botania:gray_petal', output: '4x botania:gray_mystical_flower' },
        { input: 'botania:light_gray_petal', output: '4x botania:light_gray_mystical_flower' },
        { input: 'botania:cyan_petal', output: '4x botania:cyan_mystical_flower' },
        { input: 'botania:purple_petal', output: '4x botania:purple_mystical_flower' },
        { input: 'botania:blue_petal', output: '4x botania:blue_mystical_flower' },
        { input: 'botania:brown_petal', output: '4x botania:brown_mystical_flower' },
        { input: 'botania:green_petal', output: '4x botania:green_mystical_flower' },
        { input: 'botania:red_petal', output: '4x botania:red_mystical_flower' },
        { input: 'botania:black_petal', output: '4x botania:black_mystical_flower' }
    ]

    mycolors.forEach(color => {
        event.recipes.gtceu.magicalgarden()
            .itemInputs(color.input)
            .itemOutputs(color.output)
            .duration(100)
            .EUt(GTValues.VA[GTValues.LV])
    })

})