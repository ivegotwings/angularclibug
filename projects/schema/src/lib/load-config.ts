export function loadFormFields(entity: string): Promise<any> {
	return new Promise((resolve, reject) => {
			// @ts-ignore 
			import( /* webpackIgnore: true */ `./model/pbjs/extschema/ves.io/schema/${entity}/form-fields.js`)
				.then((r) => {
					resolve(r)
				})
	})
}
