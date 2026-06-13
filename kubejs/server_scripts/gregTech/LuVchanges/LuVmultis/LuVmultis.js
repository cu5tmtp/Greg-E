ServerEvents.recipes((event) => {

    let convertToAssembler = (recipeID, circuit, duration, num) => {
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
                
                if (id === 'gtceu:micro_processor_mainframe') {
                    finalInputs.push(`${combined[id]}x #gtceu:circuits/luv`)
                } 
                else {
                    finalInputs.push(`${combined[id]}x ${id}`)
            }
            
        }
        let assemblerRecipe = event.recipes.gtceu.assembler(num + '_manual_conv')
            .itemInputs(finalInputs)
            .itemOutputs(output)
            .EUt(GTValues.VA[GTValues.IV])
            .duration(duration)

        if(num < 11){
            assemblerRecipe.itemInputs('4x gtceu:signalum_ingot')
        } else {
            assemblerRecipe.itemInputs('4x gtceu:lumium_ingot')
        }

        assemblerRecipe.circuit(circuit)
        
        event.remove({ id: recipeID })
    }

    const recipes = [
        { id: 'gtceu:shaped/large_solidifier', num: '1' },
        { id: 'gtceu:shaped/large_ore_washer', num: '2' },
        { id: 'gtceu:shaped/large_distillery', num: '3' },
        { id: 'gtceu:shaped/large_extractor', num: '4' },
        { id: 'gtceu:shaped/large_autoclave', num: '5' },
        { id: 'gtceu:shaped/large_extruder', num: '6' },
        { id: 'gtceu:shaped/large_wiremill', num: '7' },
        { id: 'gtceu:shaped/large_material_press', num: '8' },
        { id: 'gtceu:shaped/large_assembler', num: '9' },
        { id: 'gtceu:shaped/large_circuit_assembler', num: '10' },
        { id: 'gtceu:shaped/large_sifter', num: '11' },
        { id: 'gtceu:shaped/large_centrifuge', num: '12' },
        { id: 'gtceu:shaped/large_electromagnet', num: '13' },
        { id: 'gtceu:shaped/large_electrolyzer', num: '14' },
        { id: 'gtceu:shaped/large_macerator', num: '15' },
        { id: 'gtceu:shaped/large_mixer', num: '16' },
        { id: 'gtceu:shaped/large_engraver', num: '17' },
        { id: 'gtceu:shaped/large_cutter', num: '18' },
        { id: 'gtceu:shaped/large_arc_smelter', num: '19' },
        { id: 'gtceu:shaped/large_cutter', num: '20' },
        { id: 'gtceu:shaped/large_brewer', num: '21' },

    ]

    recipes.forEach(recipe => {
        convertToAssembler(recipe.id, 8, 300, recipe.num)
    })

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:signalum_dust'
        )
        .itemOutputs(
            'gtceu:signalum_ingot'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.IV])
        .blastFurnaceTemp(4400)

    event.recipes.gtceu.electric_blast_furnace()
        .itemInputs(
            'gtceu:lumium_dust'
        )
        .itemOutputs(
            'gtceu:lumium_ingot'
        )
        .duration(500)
        .EUt(GTValues.VA[GTValues.IV])
        .blastFurnaceTemp(4400)
})