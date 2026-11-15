ServerEvents.recipes((event) => {

    let cableRecipes = [
        {
            input: 'kubejs:manasteelfoil',
            dust: 'gregecore:manasteel_cable_dust',
            ingot: 'botania:manasteel_ingot'
        },
        {
            input: 'gregecore:manasteel_coil',
            dust: 'gregecore:manasteel_cable_dust'
        },
        {
            input: 'kubejs:twilightfoil',
            dust: 'gregecore:twilight_alloy_cable_dust',
            ingot: 'kubejs:twilightingots'
        },
        {
            input: 'gregecore:twilight_coil',
            dust: 'gregecore:twilight_alloy_cable_dust'
        },
        {
            input: 'kubejs:deshfoil',
            dust: 'gregecore:desh_cable_dust',
            ingot: 'ad_astra:desh_ingot'
        },
        {
            input: 'gregecore:desh_coil',
            dust: 'gregecore:desh_cable_dust'
        },
        {
            input: 'kubejs:malachitefoil',
            dust: 'gregecore:malachite_cable_dust',
            ingot: 'botanicalextramachinery:malachite_ingot'
        },
        {
            input: 'gregecore:malachite_coil',
            dust: 'gregecore:malachite_cable_dust'
        },
        {
            input: 'kubejs:forgfoil',
            dust: 'gregecore:forgotten_ingot_cable_dust',
            ingot: 'undergarden:forgotten_ingot'
        },
        {
            input: 'gregecore:forgotten_coil',
            dust: 'gregecore:forgotten_ingot_cable_dust'
        },
        {
            input: 'gregecore:superelement_coil',
            dust: 'gregecore:superelement27_dust'
        },
        {
            input: 'gregecore:awakened_draconium_coil',
            dust: 'gregecore:awakened_draconium_cable_dust'
        }
    ]

    cableRecipes.forEach(recipe => {
        event.recipes.gtceu.macerator(`cable_macerator_${recipe.input.split(':')[1]}`)
            .itemInputs(recipe.input)
            .itemOutputs(recipe.dust)
            .EUt(GTValues.VA[GTValues.LV])
            .duration(50)

        if (recipe.ingot) {
            event.smelting(recipe.ingot, recipe.dust)
        }
    })


})