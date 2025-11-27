# features (Redux slices)

This folder contains domain feature slices for the app. Each feature should own its slice, selectors, actions, async thunks, and (optionally) local tests. Use Redux Toolkit (RTK) and keep slices small and focused.

## Purpose
- Encapsulate feature state and logic.
- Provide well-named selectors and actions for components.
- Keep side effects via RTK async thunks or middleware (not in components).

## Recommended structure
- features/
    - someFeature/
        - someFeatureSlice.ts
        - selectors.ts
        - types.ts
        - api.ts (optional)
        - someFeatureSlice.test.ts
    - anotherFeature/
    - index.ts

Put each feature in its own folder. Export the slice reducer and selectors from that feature folder. Provide a top-level index.ts that re-exports reducers and types for store configuration.

## Slice template (TypeScript + RTK)
```ts
// features/someFeature/someFeatureSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import type { SomeFeatureState, SomePayload } from './types';
import { fetchSomething } from './api';

const initialState: SomeFeatureState = {
    items: [],
    status: 'idle',
    error: null,
};

export const loadItems = createAsyncThunk('someFeature/loadItems', async () => {
    return await fetchSomething();
});

const slice = createSlice({
    name: 'someFeature',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<SomePayload>) {
            state.items.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadItems.pending, (s) => { s.status = 'loading'; })
            .addCase(loadItems.fulfilled, (s, a) => { s.status = 'succeeded'; s.items = a.payload; })
            .addCase(loadItems.rejected, (s, a) => { s.status = 'failed'; s.error = a.error.message ?? null; });
    },
});

export const { addItem } = slice.actions;
export const selectItems = (state: RootState) => state.someFeature.items;
export default slice.reducer;
```

## Adding reducers to the store
- Import feature reducers into `store.ts` or `rootReducer` and add under a key matching the slice name.
```ts
import someFeatureReducer from './features/someFeature/someFeatureSlice';
const store = configureStore({ reducer: { someFeature: someFeatureReducer /* ... */ } });
```

## Naming & conventions
- Slice folder and slice name: use camelCase (e.g., `userProfile`, `notifications`).
- File names: `*-slice.ts` or `*Slice.ts` consistent across repo.
- Export selectors from `selectors.ts` when they are more than one or are complex.

## Testing
- Unit test reducers and async thunks.
- Keep tests colocated: `someFeatureSlice.test.ts` or `__tests__/someFeature.test.ts`.
- Mock API calls for thunks.

## Best practices
- Keep slices focused to feature state only.
- Avoid putting large async logic in components; use thunks or sagas.
- Use TypeScript types for state and action payloads.
- Prefer immutability via RTK's immer (mutating syntax allowed inside reducers).

For questions about store setup or slice patterns, consult the project's contributing docs or the Redux Toolkit docs.