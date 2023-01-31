const { fetchUsers, addUser, deleteUser, updateUser, getFistUserName } = require('./api');

let bd = [{ id: 1, name: 'User 1' },
{ id: 2, name: 'User 2' },]


jest.mock('./api', () => {
    return {
        fetchUsers: jest.fn().mockResolvedValue(bd),
        addUser: jest.fn({ id: 3, name: 'User 3' }).mockResolvedValue(
            [...bd, { id: 3, name: 'User 3' },]
        ),
        updateUser: jest.fn({ id: 3, name: 'User -3' }).mockResolvedValue(
            { id: -3, name: 'User -3' },
        ),
        deleteUser: jest.fn(3).mockResolvedValue([
            { id: 1, name: 'User 1' },
            { id: 2, name: 'User 2' },
        ]
        ),
        getFistUserName: jest.fn({ id: 3, name: 'User -3' }).mockResolvedValue(
            'User 1'
        ),
    };
});

describe('Rest API test for user', () => {
    it('fetches users from the API', async () => {
        const users = await fetchUsers();
        expect(users).toEqual([
            { id: 1, name: 'User 1' },
            { id: 2, name: 'User 2' },
        ]);
    });
    it('add user from the API', async () => {
        const user = await addUser({ id: 3, name: 'User 3' });
        expect(user).toEqual(
            [...bd, { id: 3, name: 'User 3' },]);
    });
    it('update user from the API', async () => {
        const user = await updateUser({ id: 3, name: 'User -3' });
        expect(user).toEqual(
            { id: -3, name: 'User -3' },
        );
    });
    it('delete user from the API', async () => {
        const user = await deleteUser(3);
        expect(user).toEqual(
            [
                { id: 1, name: 'User 1' },
                { id: 2, name: 'User 2' },
            ]
        );
    });
    it('Get first username', async () => {
        const user = await getFistUserName();
        expect(user).toEqual(
            'User 1'
        );
    });
});