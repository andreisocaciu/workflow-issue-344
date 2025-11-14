export async function testWorkflow(input: { id: string }) {
  'use workflow';

  const step1Result = await step1(input);
  const step2Result = await step2(input);
  const step3Result = await step3(input);

  return {
    step1: step1Result.value,
    step2: step2Result.value,
    step3: step3Result.value,
  };
}

async function step1(input: { id: string }) {
  'use step';
  return { value: 'Step 1 completed' };
}

async function step2(input: { id: string }) {
  'use step';
  return { value: 'Step 2 completed' };
}

async function step3(input: { id: string }) {
  'use step';
  return { value: 'Step 3 completed' };
}

