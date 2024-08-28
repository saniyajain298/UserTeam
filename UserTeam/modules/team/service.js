import { Team } from "../../model/team.js";
import { User } from "../../model/user.js";


/*
    Async Function Service to Create Team.
*/
export async function create_team(team){

    const db_team = new Team(team)
    const team_obj = await db_team.save()
    console.log(team_obj)
    return team_obj
}


/*
    Async Function Service to Get Team.
*/
export async function get_team(){

    const team_obj = await Team.find().limit(4).sort({ _id: -1 }).populate('members')
    return team_obj
}


/*
    Async Function Service to Update Team.
*/
export async function update_team(id, team){

    const db_team =  await Team.findById(id)
    db_team = team
    const team_obj = db_team.save()
    return team_obj
}


/*
    Async Function Service to delete Team.
*/
export async function delete_team(id){

    const db_team = await Team.findOneAndDelete(id)
    return db_team
}
