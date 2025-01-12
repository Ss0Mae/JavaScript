class SQL{
    constructor(db, table) {
        this.db = db;
        this.table = table;
    }

    async delete(conditions) {
        try {
            let query, values;
            console.log(query, values);

            if (Array.isArray(conditions)) {
                query = `DELETE FROM ${this.table} WHERE id IN (${conditions.map(() => '?').join(', ')})`;
                values = conditions;
            } else if (typeof conditions === 'object' && Object.keys(conditions).length > 0) {
                const conditionKeys = Object.keys(conditions);
                const conditionStrings = conditionKeys.map(key => `${key} = ?`).join(' AND ');
                values = Object.values(conditions);
                query = `DELETE FROM ${this.table} WHERE ${conditionStrings}`;
            } else {
                throw new Error('Check Conditions');
            }

            const [results] = await this.db.query(query, values);
            
            if (results.affectedRows > 0) {
                return { success: true };
            } else {
                return { success: false};
            }
        } catch (error) {
            console.error('Error Detecting!', error);
            return { success: false};
        }
    }
}