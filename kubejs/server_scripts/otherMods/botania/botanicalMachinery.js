ServerEvents.recipes((event) => {

    let convertToMagicalAssembler = (recipeID, circuit, duration) => {
        let recipe = event.findRecipes({ id: recipeID })[0]
        if (!recipe) return

        let rawIngredients = recipe.getOriginalRecipeIngredients().filter(ing => !ing.empty)
        let output = recipe.getOriginalRecipeResult()

        let combined = {}
        
        rawIngredients.forEach(ing => {
                let stack = ing.getFirst()
                let id = stack.id 
                
                if (id === 'botania:aura_ring_greater') {
                    id = 'kubejs:vanaheimingotblock'
                }

                if (id === 'botania:white_petal') {
                    id = '#botania:petals'
                }

                if (id === 'botania:rune_lust') {
                    id = '#botania:runes'
                }
                
                combined[id] = (combined[id] || 0) + stack.count
        })

        let finalInputs = []

        for (let id in combined) {
            let count = combined[id]

            if (id.startsWith('#')) {
                finalInputs.push(count + 'x ' + id)
            } else {
                finalInputs.push(Item.of(id, count))
            }
        }

        event.recipes.gtceu.assembler(recipeID.replace(':', '_') + '_manual_conv')
            .itemInputs(
                finalInputs
            )
            .itemOutputs
            (output

            )
            .inputFluids(
                'gtceu:soldering_alloy 144'
            )
            .EUt(GTValues.VA[GTValues.EV])
            .duration(duration)
            .circuit(circuit)

        event.remove({ id: recipeID })
    
    }

    const bm_machines = [
        'alfheim_market',
        'industrial_agglomeration_factory',
        'mechanical_apothecary',
        'mechanical_brewery',
        'mechanical_daisy',
        'mechanical_mana_pool',
        'mechanical_runic_altar',
        'mechanical_mana_infuser',
        'mana_battery'
    ]

    bm_machines.forEach(machine => {
        convertToMagicalAssembler('botanicalmachinery:' + machine, 16, 250)
    })

})