ServerEvents.recipes((event) =>{

    event.replaceInput(
        'dimstorage:dim_core',
        'minecraft:diamond',
        'kubejs:voidhole'
    )

        event.shaped(
        Item.of('gregecore:dimensional_filter_casing', 1),
        [
            'AAA',
            'BBB',
            'CDE'
        ],
        {
            A: 'gtceu:ancient_metal_single_wire',
            B: 'gtceu:item_filter',
            C: 'gtceu:mv_electric_motor',
            D: 'gtceu:steel_frame',
            E: 'gtceu:steel_rotor'
        }
    )

    event.shaped(
        Item.of('gregecore:dimensional_relics_machine', 1),
        [
            'AAA',
            'ABA',
            'ACA'
        ],
        {
            A: 'gtceu:stainless_steel_ingot',
            B: 'gtceu:hv_machine_hull',
            C: '#gtceu:circuits/hv'
        }
    )
    
})