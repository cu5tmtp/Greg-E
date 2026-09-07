ServerEvents.recipes((event) => {

    let convertToMagicalForge = (recipeID, duration) => {
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

        event.recipes.gtceu.magicalforge(recipeID.replace(':', '_') + '_manual_conv')
            .itemInputs(finalInputs)
            .itemOutputs(output)
            .EUt(GTValues.VA[GTValues.LV])
            .duration(duration)
        
        event.remove({ id: recipeID })
    }

    let recipeids = [
        'botania:lens_normal',
        'botania:lens_speed',
        'botania:lens_power',
        'botania:lens_time',
        'botania:lens_efficiency',
        'botania:lens_bounce',
        'botania:lens_gravity',
        'botania:lens_mine',
        'botania:lens_damage',
        'botania:lens_phantom',
        'botania:lens_magnet',
        'botania:lens_explosive',
        'botania:lens_influence',
        'botania:lens_weight',
        'botania:lens_paint',
        'botania:lens_fire',
        'botania:lens_piston',
        'botania:lens_light',
        'botania:lens_warp',
        'botania:lens_redirect',
        'botania:lens_firework',
        'botania:lens_flare',
        'botania:lens_messenger',
        'botania:lens_tripwire',
        'botania:dirt_rod',
        'botania:skydirt_rod',
        'botania:terraform_rod',
        'botania:cobble_rod',
        'botania:water_rod',
        'botania:tornado_rod',
        'botania:fire_rod',
        'botania:divining_rod',
        'botania:smelt_rod',
        'botania:exchange_rod',
        'botania:missile_rod',
        'botania:gravity_rod'
    ]

    recipeids.forEach((event) => {
        convertToMagicalForge(event, 100)
    })

})