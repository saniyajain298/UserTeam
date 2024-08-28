import { User } from "../../model/user.js";

function parseCommaSeparatedString(input) {
    if (input) {
        return input.split(',').map(item => item.trim()).filter(Boolean); 
    } else {
        return [];
    }
}

/*
    Async Function Service to Create User.
*/
export async function create_user(user) {

    const db_user = new User(user)
    const user_obj = await db_user.save()
    return user_obj
}



export async function get_user({
    limit = 6,
    search = '',
    gender = '',
    domain = '',
    page = 1,
    pagination = false
}) {
    try {
        // Build query object
        const query = {};

        if (search) {
            query.name = { $regex: search, $options: 'i' }; // Search by name
        }

        // Parse and filter gender and domain arrays
        const genderArray = Array.isArray(gender) ? gender.filter(Boolean) : parseCommaSeparatedString(gender);
        const domainArray = Array.isArray(domain) ? domain.filter(Boolean) : parseCommaSeparatedString(domain);

        if (genderArray.length > 0) {
            query.gender = { $in: genderArray }; // Filter by multiple genders
        }

        if (domainArray.length > 0) {
            query.domain = { $in: domainArray }; // Filter by multiple domains
        }

        if (pagination) {
            const limitNumber = Number(limit);
            const pageNumber = Number(page);

            if (isNaN(limitNumber) || isNaN(pageNumber) || limitNumber <= 0 || pageNumber <= 0) {
                throw new Error('Invalid pagination parameters');
            }

            const skip = (pageNumber - 1) * limitNumber;
            const totalCount = await User.countDocuments(query);
            const users = await User.find(query).skip(skip).limit(limitNumber);

            return {
                users,
                totalCount,
                totalPages: Math.ceil(totalCount / limitNumber),
                currentPage: pageNumber
            };
        }  else {
            console.log("query", limit)
            const users = await User.find(query).limit(Number(limit));
            console.log(users)
            return users;
        }
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }
}


/*
    Async Function Service to Update User.
*/
export async function update_user(id, user) {

    const db_user = await User.findById(id)
    db_user = user
    const user_obj = db_user.save()
    return user_obj
}


/*
    Async Function Service to delete User.
*/
export async function delete_user(id) {

    const db_user = await User.findOneAndDelete(id)
    return db_user
}


export async function get_domain(){
    const domains = await User.distinct('domain');
    return domains
}
export async function get_gender(){
    const gender = await User.distinct('gender');
    return gender
}