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
        'botania:gravity_rod',
        'botania:mana_tablet',
        'botania:mana_tablet_alt',
        'botanicalmachinery:mana_tablet',
        'botania:mana_mirror',
        'botania:mana_gun',
        'botania:slingshot',
        'botania:open_bucket',
        'botania:spawner_mover',
        'botania:ender_hand',
        'botania:crafting_halo',
        'botania:auto_crafting_halo',
        'botania:mana_ring',
        'botania:mana_ring_greater',
        'botania:aura_ring',
        'botania:aura_ring_greater',
        'botania:magnet_ring',
        'botania:magnet_ring_greater',
        'botania:water_ring',
        'botania:swap_ring',
        'botania:dodge_ring',
        'botania:mining_ring',
        'botania:reach_ring',
        'botania:pixie_ring',
        'botania:travel_belt',
        'botania:super_travel_belt',
        'botania:speed_up_belt',
        'botania:knockback_belt',
        'botania:ice_pendant',
        'botania:lava_pendant',
        'botania:super_lava_pendant',
        'botania:cloud_pendant',
        'botania:super_cloud_pendant',
        'botania:holy_cloak',
        'botania:unholy_cloak',
        'botania:balance_cloak',
        'botania:invisibility_cloak',
        'botania:third_eye',
        'botania:spark_upgrade_dispersive',
        'botania:spark_upgrade_dominant',
        'botania:spark_upgrade_recessive',
        'botania:spark_upgrade_isolated',
        'botania:corporea_spark',
        'botania:corporea_spark_master',
        'mythicbotany:fire_ring',
        'mythicbotany:ice_ring'
    ]

    recipeids.forEach((event) => {
        convertToMagicalForge(event, 100)
    })

    let convertToMagicalToolForge = (recipeID, duration) => {
        let recipe = event.findRecipes({ id: recipeID })[0]
        if (!recipe) return

        let rawIngredients = recipe.getOriginalRecipeIngredients().filter(ing => !ing.empty)
        let output = recipe.getOriginalRecipeResult()
        
        let outputId = output.getId().toString()

        let combined = {}
        
        rawIngredients.forEach(ing => {
            let id = ing.getFirst().getId()
            combined[id] = (combined[id] || 0) + 1
        })

        let finalInputs = []
        for (let id in combined) {
            finalInputs.push(Item.of(id, combined[id]))
        }

        let circuitNum = 0
        if (outputId.includes('helmet')) circuitNum = 1
        else if (outputId.includes('chestplate')) circuitNum = 2
        else if (outputId.includes('leggings')) circuitNum = 3
        else if (outputId.includes('boots')) circuitNum = 4
        else if (outputId.includes('sword')) circuitNum = 5
        else if (outputId.includes('pick')) circuitNum = 6
        else if (outputId.includes('axe')) circuitNum = 7
        else if (outputId.includes('shovel')) circuitNum = 8
        else if (outputId.includes('hoe')) circuitNum = 9
        else if (outputId.includes('shears')) circuitNum = 10
        else if (outputId.includes('dagger')) circuitNum = 11
        else if (outputId.includes('bow')) circuitNum = 12

        let builder = event.recipes.gtceu.magicaltoolforge(recipeID.replace(':', '_') + '_manual_conv')
            .itemInputs(finalInputs)
            .itemOutputs(output)
            .EUt(GTValues.VA[GTValues.LV])
            .duration(duration)
        
        if (circuitNum > 0) {
            builder.circuit(circuitNum)
        }
        
        event.remove({ id: recipeID })
    }

    let recipeidstool = [
        'botania:manasteel_helmet',
        'botania:manasteel_chestplate',
        'botania:manasteel_leggings',
        'botania:manasteel_boots',
        'botania:manasteel_pick',
        'botania:manasteel_shovel',
        'botania:manasteel_axe',
        'botania:manasteel_hoe',
        'botania:manasteel_sword',
        'botania:manasteel_shears',
        'botania:elementium_helmet',
        'botania:elementium_chestplate',
        'botania:elementium_leggings',
        'botania:elementium_boots',
        'botania:elementium_pickaxe',
        'botania:elementium_shovel',
        'botania:elementium_axe',
        'botania:elementium_hoe',
        'botania:elementium_sword',
        'botania:elementium_shears',
        'botania:terrasteel_helmet',
        'botania:terrasteel_chestplate',
        'botania:terrasteel_leggings',
        'botania:terrasteel_boots',
        'botania:terra_pick',
        'botania:terra_axe',
        'botania:terra_sword',
        'botania:star_sword',
        'botania:thunder_sword',
        'botania:manaweave_helmet',
        'botania:manaweave_chestplate',
        'botania:manaweave_leggings',
        'botania:manaweave_boots',
        'botania:ender_dagger',
        'botania:glass_pickaxe',
        'botania:livingwood_bow',
        'botania:crystal_bow'
    ]

    recipeidstool.forEach((event) => {
        convertToMagicalToolForge(event, 100)
    })

})