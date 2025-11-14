import { type NextRequest, NextResponse } from 'next/server';
import { start } from 'workflow/api';
import { testWorkflow } from '@/app/workflows/test';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data } = body;

    // Start the workflow with a simple object
    const run = await start(testWorkflow, [{ id: data }]);
    const result = await run.returnValue;

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error('Error executing workflow:', error);
    return NextResponse.json(
      {
        error: 'Failed to execute workflow',
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    );
  }
}
