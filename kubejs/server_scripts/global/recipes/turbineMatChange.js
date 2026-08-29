ServerEvents.recipes((event) => {

    event.remove({id: 'gtceu:shaped/rotor_malachite_rotor'})
    event.remove({id: 'gtceu:shaped/ring_malachite_rotor'})
    event.remove({id: 'gtceu:extruder/extrude_malachite_rotor_ingot_to_rotor'})
    event.remove({id: 'gtceu:extruder/extrude_malachite_rotor_ingot_to_ring'})
    event.remove({id: 'gtceu:cutter/cut_malachite_rotor_block_to_plate'})
    event.remove({id: 'gtceu:cutter/cut_malachite_rotor_block_to_plate_water'})
    event.remove({id: 'gtceu:cutter/cut_malachite_rotor_block_to_plate_distilled_water'})
    
    event.replaceInput(
        {id: 'gtceu:shaped/stick_malachite_rotor'},
        'gregecore:malachite_rotor_ingot',
        'botanicalextramachinery:malachite_ingot'
    )

    event.replaceInput(
        {id: 'gtceu:lathe/lathe_malachite_rotor_to_rod'},
        'gregecore:malachite_rotor_ingot',
        'botanicalextramachinery:malachite_ingot'
    )

    event.replaceInput(
        {id: 'gtceu:extruder/extrude_malachite_rotor_to_rod'},
        'gregecore:malachite_rotor_ingot',
        'botanicalextramachinery:malachite_ingot'
    )

    event.replaceInput(
        {id: 'gtceu:forge_hammer/hammer_malachite_rotor_to_plate'},
        'gregecore:malachite_rotor_ingot',
        'botanicalextramachinery:malachite_ingot'
    )

    event.replaceInput(
        {id: 'gtceu:bender/bend_malachite_rotor_to_plate'},
        'gregecore:malachite_rotor_ingot',
        'botanicalextramachinery:malachite_ingot'
    )

    event.replaceInput(
        {id: 'gtceu:extruder/extrude_malachite_rotor_to_plate'},
        'gregecore:malachite_rotor_ingot',
        'botanicalextramachinery:malachite_ingot'
    )

    event.replaceInput(
        {id: 'gtceu:shaped/plate_malachite_rotor'},
        'gregecore:malachite_rotor_ingot',
        'botanicalextramachinery:malachite_ingot'
    )

    event.replaceInput(
        {id: 'gtceu:extruder/extrude_malachite_rotor_ingot_to_bolt'},
        'gregecore:malachite_rotor_ingot',
        'botanicalextramachinery:malachite_ingot'
    )

    event.replaceInput(
        {id: 'gtceu:bender/bend_malachite_rotor_ingot_to_double_plate'},
        'gregecore:malachite_rotor_ingot',
        'botanicalextramachinery:malachite_ingot'
    )

    event.replaceInput(
        {id: 'gtceu:shaped/plate_double_malachite_rotor'},
        'gregecore:malachite_rotor_ingot',
        'botanicalextramachinery:malachite_ingot'
    )

    event.remove({id: 'gtceu:shaped/rotor_desh_rotor'})
    event.remove({id: 'gtceu:shaped/ring_desh_rotor'})
    event.remove({id: 'gtceu:extruder/extrude_desh_rotor_ingot_to_rotor'})
    event.remove({id: 'gtceu:extruder/extrude_desh_rotor_ingot_to_ring'})
    event.remove({id: 'gtceu:cutter/cut_desh_rotor_block_to_plate'})
    event.remove({id: 'gtceu:cutter/cut_desh_rotor_block_to_plate_water'})
    event.remove({id: 'gtceu:cutter/cut_desh_rotor_block_to_plate_distilled_water'})
    event.remove({id: 'gtceu:forge_hammer/hammer_desh_rotor_to_plate'})
    event.remove({id: 'gtceu:bender/bend_desh_rotor_to_plate'})
    event.remove({id: 'gtceu:extruder/extrude_desh_rotor_to_plate'})
    event.remove({id: 'gtceu:shaped/plate_desh_rotor'})
    
    event.replaceInput(
        {id: 'gtceu:shaped/stick_desh_rotor'},
        'gregecore:desh_rotor_ingot',
        'ad_astra:desh_ingot'
    )

    event.replaceInput(
        {id: 'gtceu:lathe/lathe_desh_rotor_to_rod'},
        'gregecore:desh_rotor_ingot',
        'ad_astra:desh_ingot'
    )

    event.replaceInput(
        {id: 'gtceu:extruder/extrude_desh_rotor_to_rod'},
        'gregecore:desh_rotor_ingot',
        'ad_astra:desh_ingot'
    )

    event.replaceInput(
        {id: 'gtceu:extruder/extrude_desh_rotor_ingot_to_bolt'},
        'gregecore:desh_rotor_ingot',
        'ad_astra:desh_ingot'
    )

    event.replaceInput(
        {id: 'gtceu:bender/bend_desh_rotor_ingot_to_double_plate'},
        'gregecore:desh_rotor_ingot',
        'ad_astra:desh_ingot'
    )

    event.replaceInput(
        {id: 'gtceu:shaped/plate_double_desh_rotor'},
        'gregecore:desh_rotor_ingot',
        'ad_astra:desh_ingot'
    )

    event.replaceInput(
        {id: 'gtceu:shaped/plate_double_desh_rotor'},
        'gregecore:desh_rotor_plate',
        'ad_astra:desh_plate'
    )

    event.replaceInput(
        {id: 'gtceu:bender/bend_desh_rotor_plate_to_double_plate'},
        'gregecore:desh_rotor_plate',
        'ad_astra:desh_plate'
    )

})