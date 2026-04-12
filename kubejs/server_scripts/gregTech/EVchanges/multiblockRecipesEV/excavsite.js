ServerEvents.recipes((event) => {

    event.shaped(
        Item.of('gtceu:excavsite', 1),
        [
            ' A ',
            'DBD',
            'CEC'
        ],
        {
            A: '#gtceu:circuits/ev',
            B: 'kubejs:cpottery',
            C: 'minecraft:brush',
            D: 'minecraft:oak_planks',
            E: 'gtceu:hv_machine_hull'
        }
    )

    event.recipes.gtceu
        .excavsite('excavxorpliers')
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .chancedOutput('kubejs:dwpliblue', 500, 0)   
        .chancedOutput('kubejs:dwppart', 2500, 0) 
        .chancedOutput('minecraft:stick', 7000, 0) 
        .notConsumable('minecraft:brush')
        .duration(200)
        .circuit(1)

    event.recipes.gtceu
        .excavsite('excavdragonhead')
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .chancedOutput('kubejs:drahead', 100, 0)   
        .chancedOutput('minecraft:clay', 2800, 0) 
        .chancedOutput('minecraft:stick', 7000, 0) 
        .notConsumable('minecraft:brush')
        .duration(200)
        .circuit(2)

    event.recipes.gtceu
        .excavsite('rutiledustget')
        .chancedOutput('gtceu:tiny_rutile_dust', 500, 0)
        .chancedOutput('gtceu:tiny_rutile_dust', 250, 0)
        .notConsumable('minecraft:brush')
        .duration(100)
        .circuit(3)

    event.recipes.gtceu
        .excavsite('tantalumdustget')
        .chancedOutput('gtceu:tiny_tantalum_dust', 500, 0)
        .chancedOutput('gtceu:tiny_tantalum_dust', 250, 0)
        .notConsumable('minecraft:brush')
        .duration(100)
        .circuit(4)

    event.recipes.gtceu
        .excavsite('bariumdustget')
        .chancedOutput('gtceu:tiny_barium_dust', 500, 0)
        .chancedOutput('gtceu:tiny_barium_dust', 250, 0)
        .notConsumable('minecraft:brush')
        .duration(100)
        .circuit(5)

    event.recipes.gtceu.excavsite('getthemrareeart')
        .itemInputs(
            'kubejs:blessedearth'
        )
        .chancedOutput('gtceu:rare_earth_dust', 10, 0)
        .duration(100)
        .circuit(6)

    event.recipes.gtceu.excavsite('magnesiumgetttt')
        .itemInputs(
            'kubejs:blessedearth'
        )
        .chancedOutput('gtceu:magnesium_dust', 10, 0)
        .duration(100)
        .circuit(7)
})
