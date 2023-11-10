<?php

namespace App\Http\Controllers\Administrator;

use App\Http\Controllers\Controller;
use App\Packages\JsonResponse;
use App\Services\TruckService;
use App\Services\UserService;
use Illuminate\Http\JsonResponse as HttpJsonResponse;

class DashboardController extends Controller
{
    public function __construct(JsonResponse $response)
    {
        parent::__construct($response);
    }

    public function index(): HttpJsonResponse
    {
        $userService = new UserService();
        $truckService = new TruckService();

        return $this->onItems(['usersCount' => $userService->countAll(), 'trucksCount' => $truckService->countAll()]);
    }
}
