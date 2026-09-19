/*
ServerEvents.recipes((event) => {

    let convertToMagicalAssembler = (recipeID, circuit, duration) => {
        let recipe = event.findRecipes({ id: recipeID })[0]
        if (!recipe) return

        let rawIngredients = recipe.getOriginalRecipeIngredients().filter(ing => !ing.empty)
        let output = recipe.getOriginalRecipeResult()

        let combined = {}
        
        rawIngredients.forEach(ing => {
            let id = ing.getFirst().getId()
            combined[id] = (combined[id] || 0) + 1
        })

        let finalInputs = []
        for (let id in combined) {
            finalInputs.push(Item.of(id, combined[id]))
        }

        let assemblerRecipe = event.recipes.gtceu.magicalassembler(recipeID.replace(':', '_') + '_manual_conv')
            .itemInputs(finalInputs)
            .itemOutputs(output)
            .EUt(GTValues.VA[GTValues.LV])
            .duration(duration)
            .circuit(circuit)
        
        event.remove({ id: recipeID })
    }

    convertToMagicalAssembler('botania:mana_pool', 1, 100)
    convertToMagicalAssembler('botania:mana_spreader', 1, 100)
    convertToMagicalAssembler('botania:redstone_spreader', 1, 100)
    convertToMagicalAssembler('botania:elven_spreader', 1, 100)
    convertToMagicalAssembler('botania:gaia_spreader', 1, 100)
    convertToMagicalAssembler('botania:diluted_pool', 1, 100)
    convertToMagicalAssembler('botania:fabulous_pool', 1, 100)
    convertToMagicalAssembler('botania:alchemy_catalyst', 1, 100)
    convertToMagicalAssembler('botania:conjuration_catalyst', 1, 100)
    convertToMagicalAssembler('botania:runic_altar', 1, 100)
    convertToMagicalAssembler('botania:runic_altar_alt', 1, 100)
    convertToMagicalAssembler('botanicalmachinery:runic_altar', 1, 100)
    convertToMagicalAssembler('botania:runic_altar', 1, 100)
    convertToMagicalAssembler('botania:brewery', 1, 100)
    convertToMagicalAssembler('botania:terra_plate', 1, 100)
    convertToMagicalAssembler('mythicbotany:mana_infuser', 1, 100)
    convertToMagicalAssembler('botania:mana_pylon', 1, 100)
    convertToMagicalAssembler('botania:natura_pylon', 1, 100)
    convertToMagicalAssembler('mythicbotany:alfsteel_pylon', 1, 100)
    convertToMagicalAssembler('botania:spawner_claw', 1, 100)
    convertToMagicalAssembler('botania:mana_distributor', 1, 100)
    convertToMagicalAssembler('botania:mana_void', 1, 100)
    convertToMagicalAssembler('botania:mana_detector', 1, 100)
    convertToMagicalAssembler('botania:mana_fluxfield', 1, 100)
    convertToMagicalAssembler('botania:turntable', 1, 100)
    convertToMagicalAssembler('botania:drum_wild', 1, 100)
    convertToMagicalAssembler('botania:drum_gathering', 1, 100)
    convertToMagicalAssembler('botania:drum_canopy', 1, 100)
    convertToMagicalAssembler('botania:prism', 1, 100)
    convertToMagicalAssembler('botania:pump', 1, 100)
    convertToMagicalAssembler('botania:mana_bomb', 1, 100)
    convertToMagicalAssembler('botania:bellows', 1, 100)
    convertToMagicalAssembler('botania:open_crate', 1, 100)
    convertToMagicalAssembler('botania:crafty_crate', 1, 100)
    convertToMagicalAssembler('botania:forest_eye', 1, 100)
    convertToMagicalAssembler('botania:ender_eye_block', 1, 100)
    convertToMagicalAssembler('botania:spectral_platform', 1, 100)
    convertToMagicalAssembler('botania:abstruse_platform', 1, 100)
    convertToMagicalAssembler('botania:corporea_index', 1, 100)
    convertToMagicalAssembler('botania:corporea_funnel', 1, 100)
    convertToMagicalAssembler('botania:starfield', 1, 100)
    convertToMagicalAssembler('botania:corporea_interceptor', 1, 100)
    convertToMagicalAssembler('botania:corporea_crystal_cube', 1, 100)
    convertToMagicalAssembler('botania:rainbow_rod', 1, 100)
    convertToMagicalAssembler('botania:hourglass', 1, 100)

    event.recipes.gtceu.magicalassembler()
        .itemInputs(
            '2x botania:elementium_ingot',
            '2x botania:pixie_dust',
            'mythicbotany:alfsteel_pylon'
        )
        .itemOutputs(
            'botania:gaia_pylon'
        )
        .duration(100)
        .circuit(1)

    event.remove({ id: 'botania:fabulous_pool_upgrade'})

})
*/