ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:forgef', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/ev',
            B: 'minecraft:anvil',
            C: 'minecraft:furnace',
            D: 'minecraft:polished_blackstone_bricks',
            E: 'gtceu:ev_machine_hull'
        }
    )

    event.recipes.gtceu
        .forgef('firstforgerecipe')
        .itemInputs(
            'gtceu:iron_dust',
            'gtceu:zinc_dust',
            'gtceu:manganese_dust'
        )   
        .inputFluids('minecraft:lava 100') 
        .itemOutputs('gregecore:franklinite_ingot')
        .duration(1000)
        .circuit(1)

    event.recipes.gtceu
        .anvilf('secondforgerecipe')
        .itemInputs('kubejs:hhead')   
        .inputFluids('gtceu:gold 432', 'minecraft:lava 100') 
        .itemOutputs('kubejs:hmold')
        .duration(500)
        .circuit(1)

    event.recipes.gtceu
        .anvilf('thirdforgerecipe')
        .itemInputs('kubejs:hmold')   
        .inputFluids(
            'gregecore:molten_franklinite 432', 'minecraft:lava 100'
        ) 
        .itemOutputs('kubejs:fhhead')
        .duration(500)
        .circuit(1)

    event.recipes.gtceu
        .forgef('firstforgerecipeham')
        .itemInputs(
            'gtceu:iron_dust',
            'gtceu:zinc_dust',
            'gtceu:manganese_dust'
        )   
        .inputFluids('minecraft:lava 300') 
        .itemOutputs('gregecore:franklinite_ingot')
        .notConsumable('kubejs:fhammer')   
        .duration(500)
        .circuit(2)

    event.recipes.gtceu
        .anvilf('secondforgerecipeham')
        .itemInputs('kubejs:hhead')   
        .inputFluids('gtceu:gold 432', 'minecraft:lava 300') 
        .itemOutputs('kubejs:hmold')
        .notConsumable('kubejs:fhammer')
        .duration(250)
        .circuit(2)

    event.recipes.gtceu
        .anvilf('thirdforgerecipeham')
        .itemInputs('kubejs:hmold')   
        .inputFluids('gregecore:molten_franklinite 432', 'minecraft:lava 300') 
        .itemOutputs('kubejs:fhhead')
        .notConsumable('kubejs:fhammer')
        .duration(250)
        .circuit(2)

    event.recipes.gtceu
        .forgef('firstforgerecipehamacis')
        .itemInputs(
            'gtceu:iron_dust',
            'gtceu:zinc_dust',
            'gtceu:manganese_dust'
        )   
        .inputFluids('kubejs:acidinfusedlava 3000') 
        .itemOutputs('gregecore:franklinite_ingot')
        .notConsumable('kubejs:fhammer')   
        .duration(5)
        .circuit(3)

    event.recipes.gtceu
        .anvilf('getorichalcumpliers')
        .inputFluids('kubejs:moltenorichalcum 432', 'minecraft:lava 300') 
        .itemOutputs('kubejs:orichalcumpli')
        .notConsumable('kubejs:fhammer')
        .notConsumable('kubejs:dwpliblue')
        .duration(250)
        .circuit(1)

    event.recipes.gtceu
        .anvilf('firsttool')
        .itemInputs('kubejs:fhhead', '2x minecraft:stick')   
        .inputFluids('minecraft:lava 100') 
        .itemOutputs('kubejs:fhammer')
        .duration(500)
        .circuit(1)

    event.recipes.gtceu
        .anvilf('firsttoolham')
        .itemInputs('kubejs:fhhead', '2x minecraft:stick')   
        .inputFluids('minecraft:lava 300') 
        .itemOutputs('kubejs:fhammer')
        .notConsumable('kubejs:fhammer')
        .duration(250)
        .circuit(2)

    

})